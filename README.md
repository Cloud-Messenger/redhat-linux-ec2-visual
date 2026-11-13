# Red Hat Linux Server on AWS EC2 – Visual
Interactive, **simulated** 9-step lesson (no real AWS calls). Created by Cloud Messenger™ · #buildwithCloud-Messenger

## Run locally
Open `index.html`, or `python3 -m http.server`.

## GitHub Pages
Push to GitHub → Settings → Pages → deploy from `main` / root.

## Deploy on RHEL EC2
```bash
chmod 400 key.pem
ssh -i key.pem ec2-user@<PUBLIC-IP>
sudo dnf install nginx git -y
git clone https://github.com/Cloud-Messenger/redhat-linux-ec2-visual.git   # placeholder URL until published
sudo cp -r redhat-linux-ec2-visual/* /usr/share/nginx/html/
sudo systemctl enable --now nginx
curl http://localhost
```
Alternative: `scp -i key.pem project.zip ec2-user@<PUBLIC-IP>:~` then `unzip`. Open port 80 in the Security Group; SSH only from your IP. HTTPS needs a TLS certificate.
