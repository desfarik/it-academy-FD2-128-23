function nbDig(n, d) {
    let res=0;
    for (let g=0;g<=n;g++){
      let square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }
    return res;
  } 