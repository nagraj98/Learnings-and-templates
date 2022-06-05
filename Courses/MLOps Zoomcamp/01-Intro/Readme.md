# 1.1 Introduction

What is MLOps ?

It is a set of best practices for putting ML in production.


The simplified process of a ML project :
1. Design - deciding the problem statement, and if we even need ML for solving it.
2. Train - Collect data, and train a model
3. Operate - deploy the model for usage, and mmoniter it.

# 1.2 Environment preparation

It is not mandatory, but preferred to do this course in cloud, to get the full benefit of it. (GCP can be used instead of AWS)

1. Create an AWS EC2 instance with linux ubuntu OS and 64-bit (x86) architecture.
2. You can use the 8gb ram one, but a 16gb ram is recommended.
3. Create a key, download the key, and place it in the .ssh folder 
   
   NOTE : the .ssh is a hidden folder in the home directory. (```cd ~/.ssh```)
4. For free tier, you get a 30GB storage. We will need all that.
5. Once the instance is launched, ssh into this from cmd/powershell :
    ```
    ssh -i ~/.ssh/yourcert.pem ubuntu@public-ip
    ```

    It is not necessary to type in the command each time, you can edit the config file in the .ssh folder :
    ```
    Host instance-name
        HostName public-ipv4-address
        User ubuntu
        IdentityFile path/to/yourcert.pem
        StrictHostKeyChecking no
    ```

    NOTE : If the config file is not present, you can create one, with no extensions. (```touch config```)

    But keep in mind that everytime you start the instance, it will have a new IP, so you need to change it here in this config file.

    And now you can just do ```ssh instance-name```
6. Go to [Anaconda downloads](https://www.anaconda.com/products/distribution#Downloads) - copy the link for the linux 64-Bit (x86) Installer, and install it using ```wget``` command.
    ```
    wget the-url-to-download
    ```

    Wget is a simple Linux/Unix command-line utility for downloading the contents, files from the web. Wget will download the resource from the URL which is specified in the command.

    Once the the download is complete, and the Anaconda.sh file is saved, run the below command :
    ```
    bash the-sh-file
    ```
    Read all the stuff, scroll down and type y to accept the licence terms. Then Anaconda tells where it will be installed.

    Once installation is done, initialise it. Logout (with ```logout```) and login(with ```ssh```) again. Then check if python points to the anaconda python (with ```which python```)
7. Meanwhile the Anaconda is being installed, go ahead and install docker :
   ```
   sudo apt install docker.io
   ```

   If it gives an error like "Package 'docker.io' has no installation candidate", do update and then retry
   ```
   sudo apt update
   ```
8. We also need docker-compose. Create a new folder called "soft". Go to [docker compose github](https://github.com/docker/compose), go to the latest release, in the assets look for linux-x86_64 file, copy its url. Download it inside the soft folder using wget and the optional name argument.
   ```
   wget the-url -0 docker-compose
   ```
   If it is not executable, it will be shown in white. To make it executable, run :
   ```
   chmod +x docker-compose
   ```
   Now it will be shown in green.

   Now, because it is in the soft folder, we need to modify our path variable for it to be accessible. In the root folder run this :
   ```
   nano .bashrc
   ```
   To the end of this file, add :
   ```sh
   export PATH="${HOME}/soft:${PATH}"
   ```
   Exit from the file and execute the file. 
   ```
   source .bashrc
   ```

   And then check if docker-compose is accessible :
   ```
   which docker-compose
   ```
9.  Once docker is installed, check if it is running correctly :
    ```
    sudo docker run hello-world
    ```

    If we don't want to use sudo every time, we need to add our user to docker group :
    ```
    # Creating a docker group
    sudo groupadd docker

    # Add our user to the group
    sudo usermod -aG docker $USER
    ```
    For this to take effect, logout and log back in. Now it should work without sudo as well.
10. Clone the repository of ml-zoomcamp (through https)
11. In VS Code you need to have the extension - "Remote - SSH" from microsoft. Now click on the "Open Remote" button in the bottom left, then -> "Connect to Host" and use the host (certificate) that you kept in .ssh folder -> select Linux platform for remote.
12. In the remote, create a folder for notebooks. And inside it start a jupyter notebook. We use port forwarding for connecting the local port of the remote machine to a local port on our local computer. We will do this using VS Code. Open a terminal. Go to the Ports tab. Add the Port where jupyter is running (probably 8888). And then forward it to localhost:8888 on the local machine as well.

# 1.3 Reading Parquet files instead of CSV

For this course, we will be using the NYC taxi dataset, which is now in Parquet format. Parquet files are much smaller than csv files.

We can still use pandas to read these files :
```python
data = pd.read_parquet("./myfile.parquet")
```

It might need an additional dependency like 'pyarrow' or 'fastparquet' , so just install any one of it.

One benefit here is that there already are datetime fields.

# 1.3 (Optional) Training a ride duration prediction model

You can download the data from [here](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page).

Use the green taxi data for jan and feb.

Compared a linear regression, lasso regression, ridge regression, etc. models and used pickle to save the model.

# 1.4 Course Overview

Notebooks are generally intended for experimenting, and generally they can be messy.

The history of all the experiments that we do in the notebook may be lost, because only the last executed cells are visible. A solution is to log all the results to an experiment tracker. In addition we can add all the models along with their metrics to a model registry. 

We will do this **Experiment Tracking** in Module 2

We will do **ML Pipelines** in Module 3, in which we decompose our notebook and turn it into something which is easily re-usable and re-executable.

# 1.4 MLOps Maturity Model

A good microsoft article on Maturity models.

## ML Automation Level 0 - Nothing Automated

- We use a notebook, without any tracking. 
- All code in sloppy jupyter notebooks. Good for POCs.

## ML Automation Level 1 - Devops but no MLOps

- Experienced developers helping the Data scientists so releases will be automated. 
- Same best practices from software development are followed, with Unit and Integration tests, CI/CD, Operational metrics, etc. 
- Important for going from POC to production.

## ML Automation Level 2 - Automated training

- Training pipeline, or even just one script for training the models. 
- Experiment tracking and model registry in place. Low friction development. 
- Stage important For projects with more than 2 ML models already in production.

## ML Automation Level 3 - Automated Deployment

- Easy to deploy model. 
- A/B testing available. 
- Model monitoring.