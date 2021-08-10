---
title: Note
---

## Note

### Install Jenkins using Docker
* Run docker:dind

```bash
docker run --name jenkins-docker -d \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume ~/docker-certs-jk:/certs/client \
  --volume ~/jenkins-home:/var/jenkins_home \
  --publish 2376:2376 docker:dind --storage-driver overlay2
```

* Run jenkins customized

```bash
docker run --name jenkins -d \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 --publish 50000:50000 \
  -v ~/jenkins_home:/var/jenkins_home \
  -v ~/docker-certs-jk:/certs/client:ro \
  jenkins-new:v1
```

[me](https://ductn.info/about)