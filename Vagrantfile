Vagrant.configure("2") do |config|
config.vm.box =  "ubuntu/trusty64"
config.vm.define "dockerhostvm2"
config.vm.network :private_network, ip: "192.168.99.100"
config.vm.provider "virtualbox" do |vb|
   # Customize the amount of memory on the VM:
     vb.memory = "1024"
   end
config.vm.provision "docker"
config.vm.provision "shell", inline: "sudo chmod 777 /var/lib/docker "
config.vm.provision "docker_compose", yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"
config.vm.provision "shell", path: "provision/setup.sh"
end