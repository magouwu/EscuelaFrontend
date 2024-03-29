const longestunique = (s) => {
  const n = s.length
  let res = 0
  for (let i = 0; i < n; i++) {
    const visited = [30]
    for (let j = i; j < n; j++) {
      if (visited[s.charCodeAt(j)] == true) break
      else {
        res = Math.max(res, j - i + 1)
        visited[s.charCodeAt(j)] = true
      }
    }
  }
  return res
}

// function lo(str)
// {
//     var n = str.length;

//     // Result
//     var res = 0;

//     for(var i = 0; i < n; i++)
//     {

//         // Note : Default values in visited are false
//         var visited = new Array(256);

//         for(var j = i; j < n; j++)
//         {

//             // If current character is visited
//             // Break the loop
//             if (visited[str.charCodeAt(j)] == true)
//                 break;

//             // Else update the result if
//             // this window is larger, and mark
//             // current character as visited.
//             else
//             {
//                 res = Math.max(res, j - i + 1);
//                 visited[str.charCodeAt(j)] = true;
//             }
//         }
//     }
//     return res;
// }

const text = 'abcabcbb'
const text1 = 'bbbbb'
const text2 = 'pwwkew'
const text3 = ''

console.log(longestunique(text))
console.log(longestunique(text1))
console.log(longestunique(text2))
console.log(longestunique(text3))
