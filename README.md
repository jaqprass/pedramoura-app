# pedramoura-app

## Setup

```sh
git clone https://https://github.com/jaqprass/pedramoura-app
cd pedramoura-app
npm install
ionic build
```

## Running

### Web

* Compile and run

```sh
ionic serve
```

### Android

* Compile
  * Update code to native device
  ```sh
  ionic cap copy
  ```
  * Update plugins to native device
  ```sh
  ionic cap sync
  ```

* Run
```sh
ionic cap open android
```
