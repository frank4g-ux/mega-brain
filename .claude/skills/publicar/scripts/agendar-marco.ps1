$node = "node"
$script = "f:\FUTURO\mega-brain\.claude\skills\publicar\scripts\publicar.js"

$posts = @(
  @{nome="VaiAnuncio-Post-20Mar"; pasta="C:\Users\FranSa\Pictures\carrossel\gerados\20"; data="2026-03-20 19:00:00"},
  @{nome="VaiAnuncio-Post-23Mar"; pasta="C:\Users\FranSa\Pictures\carrossel\gerados\23"; data="2026-03-23 19:00:00"},
  @{nome="VaiAnuncio-Post-25Mar"; pasta="C:\Users\FranSa\Pictures\carrossel\gerados\25"; data="2026-03-25 19:00:00"},
  @{nome="VaiAnuncio-Post-27Mar"; pasta="C:\Users\FranSa\Pictures\carrossel\gerados\27"; data="2026-03-27 19:00:00"},
  @{nome="VaiAnuncio-Post-30Mar"; pasta="C:\Users\FranSa\Pictures\carrossel\gerados\30"; data="2026-03-30 19:00:00"}
)

foreach ($p in $posts) {
  $action   = New-ScheduledTaskAction -Execute $node -Argument ("`"$script`" --pasta `"$($p.pasta)`"")
  $trigger  = New-ScheduledTaskTrigger -Once -At $p.data
  $settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 10)
  Register-ScheduledTask -TaskName $p.nome -Action $action -Trigger $trigger -Settings $settings -Force | Out-Null
  Write-Host "Agendado: $($p.nome) -- $($p.data)"
}
Write-Host "Pronto! 5 posts agendados para Marco 2026."
