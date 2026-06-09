# Deploy the static export (respyr-next/out) to the S3 bucket behind respyr.ai,
# then invalidate the CloudFront cache so the live site updates.
#
# Prerequisites:
#   1. AWS CLI installed:  winget install Amazon.AWSCLI   (or https://aws.amazon.com/cli/)
#   2. Credentials configured:  aws configure   (enter your Access Key, Secret, region)
#   3. Build the export first:  npm run build   (produces ./out)
#
# Find your bucket + distribution id (run once, then pass them in):
#   aws s3 ls
#   aws cloudfront list-distributions --query "DistributionList.Items[?contains(Aliases.Items, 'respyr.ai')].{Id:Id,Domain:DomainName,Aliases:Aliases.Items}"
#
# Usage:
#   ./deploy-to-s3.ps1 -Bucket your-bucket-name -DistributionId EXXXXXXXXXXXXX

param(
  [Parameter(Mandatory = $true)][string]$Bucket,
  [Parameter(Mandatory = $true)][string]$DistributionId
)

$ErrorActionPreference = 'Stop'
$out = Join-Path $PSScriptRoot 'out'

if (-not (Test-Path $out)) {
  throw "out/ not found at $out. Run 'npm run build' in respyr-next first."
}

Write-Host "==> Syncing $out  ->  s3://$Bucket" -ForegroundColor Cyan
# Long-cache the fingerprinted assets, short-cache the HTML so updates show up fast.
aws s3 sync $out "s3://$Bucket" --delete --exclude "*.html" --cache-control "public,max-age=31536000,immutable"
aws s3 sync $out "s3://$Bucket" --delete --exclude "*" --include "*.html" --cache-control "public,max-age=60,must-revalidate"

Write-Host "==> Invalidating CloudFront distribution $DistributionId" -ForegroundColor Cyan
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"

Write-Host "==> Done. respyr.ai will reflect the new build once the invalidation finishes (usually a few minutes)." -ForegroundColor Green
