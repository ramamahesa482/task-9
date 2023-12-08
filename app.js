const  {index,store,update,destroy} = require ("./fruitController.js");

const main  = () =>{
    console.log("Method index - Menampilkan Buah");
    index();
    console.log();
    console.log("Method store - Menambahkan buah Pisang");
    store("Pisang");
    console.log();
    console.log("Method update - Update data 0 menjadi Kelapa");
    update(0,"Kelapa");
    console.log();
    console.log("Method destroy - Menghapus data 0");
    destroy(0);
};

main();