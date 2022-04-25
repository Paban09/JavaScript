const band={
    bandName:"LRB",
    bandSong:"Sei Tumi",
    year: 1999,
    estd:"Dhaka"
};

// const bandName=band.bandName;
// const bandSong=band.bandSong;

let {bandName,bandSong, ...rest}=band;
// let {bandName,bandSong}=band;
console.log(bandName,bandSong);
bandSong="Haste Dekho"
console.log(bandName,bandSong);
console.log(rest);
//As Year hasn't destructured it won't work
// console.log(year);

