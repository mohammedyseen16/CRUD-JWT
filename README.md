### To install this app

1. To download all pacakges

```
  go mod tidy
```

2. To install the exe

```
 go install
```

##### Commands to use tez-cli

```
tez list monitoring templates
tez apply monitoring <temp_name>
tez show monitoring status
tez stop monitoring
```

#### To Run and test

* Download mongodb compass download [here](https://downloads.mongodb.com/compass/mongodb-compass_1.35.0_amd64.deb).
* Make sure backend is up and running if not please follow below steps
    * Open new terminal of split two terminals and change directory to.
    ``` 
    cd server
    ```
    ```
    go run main.go
    ```
* Then Run the above cli commands which works fine. 
* Done :)
