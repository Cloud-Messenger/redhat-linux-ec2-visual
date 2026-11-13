const INC=[
["SSH connection timed out","Port 22 blocked, wrong source IP, or instance stopped","Check Security Group inbound rules and instance state","No rule for port 22","Add SSH rule from your /32 IP; start the instance","ssh connects"],
["Permission denied (publickey)","Wrong key or username","ssh -v -i key.pem ec2-user@IP","Permission denied (publickey)","Use the right key, chmod 400, user ec2-user","Shell prompt appears"],
["Website not loading","Port 80 blocked, NGINX down, or wrong IP","curl -I http://localhost (on server)","HTTP/1.1 200 OK locally, timeout remotely","Open port 80 in the SG; confirm the public IP","Page loads in browser"],
["NGINX service stopped","Service not running","sudo systemctl status nginx","inactive (dead)","sudo systemctl enable --now nginx","active (running)"],
["NGINX configuration error","Syntax mistake","sudo nginx -t","[emerg] unexpected \"}\" in nginx.conf","Fix the line shown, then sudo systemctl reload nginx","syntax is ok"],
["Default page / 403 Forbidden","Files missing, wrong permissions, or SELinux context","ls -l /usr/share/nginx/html","index.html missing or unreadable","Copy files; chmod -R a+rX; sudo restorecon -R /usr/share/nginx/html","Custom site served"],
["Disk space exhausted","Logs or data filled the root volume","df -h","100% /","Free space or enlarge the EBS volume and grow the filesystem","Use% well below 100"]];
function initTrouble(el){el.innerHTML='<h3>Incident control room</h3>'+INC.map((x,k)=>'<button class="inc" data-k="'+k+'">⚠ '+x[0]+'</button>').join('')+'<div id="d"></div>';
el.onclick=e=>{const b=e.target.closest('.inc');if(!b)return;const x=INC[b.dataset.k];el.querySelector('#d').innerHTML='<p><b>Root cause:</b> '+x[1]+'</p><p><b>Diagnose:</b> <code>'+x[2]+'</code></p><pre>'+x[3]+'</pre><p><b>Fix:</b> '+x[4]+'</p><p class="ok">✔ Verify: '+x[5]+'</p>'}}
