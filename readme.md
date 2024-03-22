# How to Create a React Application
`npx create-react-app <folder name>`

So for example, to create a new react application in the folder `foobar`
```
npx create-react-app foobar
```

# Setting up Hot Reload for Gitpod
1. Create an `.env` file in the same directory as the `package.json`
2. In the `.env` file, we put in:
```
WDS_SOCKET_PORT=0
```