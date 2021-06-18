# 한빛교회 홈페이지 제작

- with golang echo, html, css, js ...

## github 연동

  1. 명령어
    ```
      git init
      git add README.md
      git commit -m "first commit"
      git branch -M main
      git remote add origin https://github.com/rebornist/hanbit_v1.0.git
      git push -u origin main
    ```

  2. gitignore 등록

## go module 생성
  ```
    go mod init github.com/rebornist/hanbit_v1.0
  ```

## go echo 설치
  ```
    go get github.com/labstack/echo/v4
  ```

## logrus 설치
  ```
    go get github.com/sirupsen/logrus
  ```

## Pongo2 설치
  ```
    go get -u github.com/flosch/pongo2/v4
  ```