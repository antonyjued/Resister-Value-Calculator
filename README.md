# Resister-Value-Calculator

[holi_repo]: https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats&cache_seconds=86400&theme=holi

## Language Used

- [ ] HTML
- [ ] CSS
- [x] Javascript

*Code*

```js
    switch(resistor_Bands)
    {
        case '3':document.getElementById("row5").style.display="none";
               document.getElementById("row6").style.display="none";
               document.getElementById("row7").style.display="none";
               break;
        case '4':document.getElementById("row6").style.display="none";
                document.getElementById("row7").style.display="none";
                document.getElementById("row5").style.display="block";
                break;
        case '5':document.getElementById("row7").style.display="none";
                document.getElementById("row5").style.display="block";
                document.getElementById("row6").style.display="block";break;
        case '6':document.getElementById("row5").style.display="block";
                 document.getElementById("row6").style.display="block";
                 document.getElementById("row7").style.display="block";break;
    }

    return 0;
}


```