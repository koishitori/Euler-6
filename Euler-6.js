var num = 100;
var seq1 = 0, seq2 = 0;
for(var i = 1; i <= num; i++){
  seq1 += i ** 2;
  seq2 += i;
}

seq2 ** 2 - seq1;
