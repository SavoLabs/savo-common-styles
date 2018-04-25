[CmdletBinding()]
param (
  [Parameter(Mandatory = $True, Position = 1)]
  [string]$buildLabel
)

$published = Invoke-Expression "npm view . versions name --json" | ConvertFrom-Json
$local = Invoke-Expression "npm version" | ConvertFrom-Json
$name = $published.name

$latest = $published.versions[-1]
$current = $local.($published.name)

Write-Host "package name      "$name
Write-Host "latest version    "$latest
Write-Host "current version   "$current

if($latest -eq $current) {
  Write-Host "CURRENT version matches LATEST version, NOT publishing new version"
} else {
  Write-Host "publishing new version" $current
  . npm publish --tag="build-$buildLabel"
}
