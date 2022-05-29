const express = require('express');
const app = express();

const path = require('path');
const _port = process.env.PORT || 5000;

if(process.env.NODE_ENV==='production')
{
    console.log('Prodution***');
    app.use(express.static(path.resolve(__dirname,'../dist')));
    app.get('/',(req,res)=>{
        const fileWithPath=path.resolve(__dirname,'../dist/','index.html');
        console.log('path ',fileWithPath);
        res.sendFile( fileWithPath,function (err) {
            if (err) {
                next(err);
            } else {
                console.log('Sent:', fileWithPath);
            }
        });
    });
}

app.listen(_port,(err)=>{
    if(err) return console.log(err);
    console.log(' Server running on port ',_port);
});