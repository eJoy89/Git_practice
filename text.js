// git log -> checkout 

// temp

// document.querySelectorAll('span').forEach(span => span.style.color = 'black');
// function adjustTrHeight() {
//     const rows = document.querySelectorAll('tr');
    
//     rows.forEach(row => {
//         const cells = row.querySelectorAll('td');
//         let maxSpans = 0;
        
//         cells.forEach(cell => {
//             const spanCount = cell.querySelectorAll('span').length;
//             if (spanCount > maxSpans) {
//                 maxSpans = spanCount - 1;
//             }
//         });
        
//         row.style.height = maxSpans * 20 + 'px';
//     });
// }

// adjustTrHeight();


// document.querySelectorAll('td').forEach((list) => {
//     list.style.height = list.scrollHeight + 'px';
// });

// 질문
// function solution(arr) {
//     let answer = [];
//     let odds = arr.filter((num) => num % 2 === 1);
//     let sumOdds = odds.reduce((acc, cur) => (acc += cur), 0);
//     let minOdd = Math.min(...odds);
// 	answer.push(sumOdds, minOdd);
    
//     let answer = [];
//     let sum = 0,
//       min = Number.MAX_SAFE_INTEGER;
//     for (let x of arr) {
//        if (x % 2 === 1) {
//          sum += x;
//          if (x < min) min = x;
//        }
//      }
//      answer.push(sum);
//      answer.push(min);
//      return answer;
//     }

//    arr = [12, 77, 38, 41, 53, 92, 85];
//    console.log(solution(arr));