Start-Sleep -Seconds 15
foreach ($page in @('/','/prompt','/examples','/about','/waitlist')) {
  try {
    $r = Invoke-WebRequest -Uri ("https://promptcraft-five-puce.vercel.app" + $page) -UseBasicParsing
    Write-Host ($page + " - " + $r.StatusCode)
  } catch {
    Write-Host ($page + " - ERROR")
  }
}
try {
  $r = Invoke-WebRequest -Uri "https://promptcraft-five-puce.vercel.app/api/chat" -Method POST -Body '{"messages":[{"role":"user","content":"hi"}]}' -ContentType "application/json" -UseBasicParsing
  Write-Host ("Chat API - " + $r.StatusCode + " (" + $r.Content.Length + " chars)")
} catch {
  Write-Host ("Chat API - ERROR: " + $_.Exception.Response.StatusCode.value__)
}
try {
  $r = Invoke-WebRequest -Uri "https://promptcraft-five-puce.vercel.app/api/waitlist" -Method POST -Body '{"name":"Test","email":"test@example.com","use_case":"personal","description":"deploy test"}' -ContentType "application/json" -UseBasicParsing
  Write-Host ("Waitlist API - " + $r.StatusCode)
} catch {
  Write-Host ("Waitlist API - ERROR: " + $_.Exception.Response.StatusCode.value__)
}
