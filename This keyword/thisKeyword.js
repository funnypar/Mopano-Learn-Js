const mopano = {
    firstname : "Mohammad Parsa",
    lastname : "Norouzi",
    birthday : 2000 , 

    age : function () {
    const parsaAge = 2022 - this.birthday;
    return parsaAge
    }
}

// const inputUser = prompt(`Hallo hallo , Mopano ist hier .Wenn Sie uber mich kennen mochten , senden mir :   (firstname , lastname , birthday , age)`);
alert(mopano.age())