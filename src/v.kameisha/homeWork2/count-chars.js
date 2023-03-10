function consonantCount(str) {
    let vowel_list = 'b,B,c,C,d,D,f,F,g,G,h,H,j,J,k,K,l,L,m,M,n,N,p,P,q,Q,r,R,s,S,t,T,v,V,w,W,x,X,y,Y,z,Z';
    let vcount = 0;
   for(let i = 0; i < str.length ; i++)
    {
      if (vowel_list.indexOf(str[i]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return vcount;
  }