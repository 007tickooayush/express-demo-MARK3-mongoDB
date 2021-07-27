## install mongoose
```
npm install --save mongoose
```

## install nodemon for dynamically implementing changes
```
npm install --save nodemon
```

## change the run configuration in [package.json](package.json)
```
"scripts": {
    "start": "nodemon ./bin/www"
  },
```
## API cmd (bash)

### GET
command:
```
curl -X GET url
```

implementation:
```
curl -X GET localhost:3000/user/user_email
```
or 
```
curl -X GET localhost:3000/user/
```

### DELETE
command:
```
curl -X DELETE url
```

implementation:
```
curl -X DELETE localhost:3000/user/user_email
```

