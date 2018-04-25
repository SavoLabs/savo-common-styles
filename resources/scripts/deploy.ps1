[CmdletBinding()]
param (
    [Parameter(Mandatory = $True, Position = 1)]
    [string]$buildLabel
)

. npm publish --tag="build-$buildLabel"
