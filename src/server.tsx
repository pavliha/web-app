import React from 'react'
import { server } from 'ssr'
import App from './App'

const template = (html: string) => `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta content="width=device-width, minimum-scale=1, shrink-to-fit=no" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/partymaker-favicon.svg" color="#9306BC">
        <meta name="msapplication-TileColor" content="#9306BC">
        <meta name="theme-color" content="#9306BC">
        <base href="/">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="/partymaker-favicon.png" type="image/x-icon">
      </head>
      <body>
         <div id="root">${html}</div>
      </body>
      </html>
`

server.render(<App />, template).listen(3333, () => console.log('sever started at 3333'))
