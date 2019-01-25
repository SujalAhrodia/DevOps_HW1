<p align="center">
  <img width="200" height="200" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/North_Carolina_State_University_Athletic_logo.svg">
</p>

# HW1-DevOps
CSC-519 Spring 2019

Name: Sujal\
Unity Id: ssujal

## Completed Tasks:
:white_check_mark: Be able to automatically provision using a code api from **two cloud providers**. Logically, you should complete the provision workshop, to have digitalocean count as one. Choose one additional cloud provider below.

:white_check_mark: Create a new VM, with a registered ssh key. This will allow you ssh directly into your account without being emailed a temporary root password.

:white_check_mark: Print out the ip address of the new server.

:white_check_mark: Use proper and source control and configuration management practices e.g., using package managers and their associated files (package.json/requirements.txt) to declare software dependencies.

### Cloud servers:
**1. [DigitalOcean](https://www.digitalocean.com/)**
1. The steps were similar to the ones performed in the workshop, with a personalised key from DigitalOcean.

2. Create a ssh key locally and register your public key to DigitalOcean.

3. Provide associated id using the API to your instance:
```
curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $DOTOKEN" "https://api.digitalocean.com/v2/account/keys"
```
4. Log into the virtual machine instance via ssh:
```
ssh root@IP adress
```
---
**2. [Google Cloud Platform(GCP)](https://cloud.google.com/free/)**

1. [Compute Engine API documentation](https://cloud.google.com/compute/docs/reference/rest/v1/)

2. Enable GCompute Engine API for your project.

3. [Set up authentication key](https://cloud.google.com/docs/authentication/getting-started) and add it to you project.

4. Make a new local directory where you want to configure your gcloud server.
```
npm init
  -enter project details
  -entry point
  ...
  ...
```
5. Run the following command before executing your code to install the API.
```
npm install @google-cloud/compute
```

6. Set configurations for the project.
```
gcloud config set project <project_name>
```
7. Log into the virtual instance via ssh.
```
gcloud compute ssh <instance_name>
```
---
**3. ScreenCast**
---

* The link to screencast is [here](https://drive.google.com/open?id=14RPnvbCgn_m9mXFSZsxNiPVFATOrRivw)
