<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/vighnesh153-canvas/angular-client/master/src/assets/icons/icon-96x96.png" width="100" />
</div>
<h1 align="center">
  vighnesh153.com - v1
</h1>
<p align="center">
  The first iteration of <a href="https://vighnesh153.com">vighnesh153.com</a> built with <a href="https://angular.io/">Angular</a> and hosted with <a href="https://firebase.google.com/">Firebase</a>
</p>

![Deploying to Firebase](https://github.com/vighnesh153-canvas/angular-client/workflows/Deploying%20to%20Firebase/badge.svg)

## 🛠 Installation & Set Up

1. Install the NPM (6+)

2. Install angular-cli

   ```sh
   npm i -g @angular/cli
   ```

3. Clone the repo and CD in it

4. Install dependencies
   
      ```sh
      npm i
      ```

## 🚀 Building for Production

1. Generate a full static production build
   
      ```sh
      ng build --prod
      ```
  
2. Serve those static files on any http server and 
make sure to configure the server to serve a SPA. 
All redirects should be pointing to `index.html`.
