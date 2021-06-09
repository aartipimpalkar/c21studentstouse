function touchCheck(a1,b1)
{

  if (a1.x - b1.x < b1.width/2 + a1.width/2
    && b1.x - a1.x < b1.width/2 + a1.width/2
    && a1.y - b1.y < b1.height/2 + a1.height/2
    && b1.y - a1.y < b1.height/2 + a1.height/2) 
    {
        return true;
    }
  else {
       return false;
     }

}


function bOff(a1,b1)
{

  if (a1.x - b1.x < b1.width/2 + a1.width/2
    && b1.x - a1.x < b1.width/2 + a1.width/2

    && a1.y - b1.y < b1.height/2 + a1.height/2
    && b1.y - a1.y < b1.height/2 + a1.height/2) 
    {
        return true;
    }
  else {
       return false;
     }

}



