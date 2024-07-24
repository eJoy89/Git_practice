console.log('stash')
console.log('stash list and stash apply')
console.log('stash drop stash@{0} -> delet')

//
// 1. git stash로 변경 사항 저장
// 2. git stash list로 리스트 확인


console.log('stash list')

// branch 확인
console.log('it is first branch')

console.log('fetch')

// git change
console.log('something change')
// check by bash

// How to Merge it?
// git stash push -m 'message' <- to save with message
// and when I save through stash, the latest stash will save as stahs@{0} 

// 취소
// 깃의 reset command to undo a merge.
// 우선, 커밋 hash (혹은 id)를 확인해야 이전의 커밋으로 돌아갈 수 있습니다.
// hash를 확인하기 위해서는 git log 혹은 git reflog를 실행하세요. 
// 더 읽기 쉬운 git reflog가 더 나은 옵션이 될 수 있습니다


// 권한
// git config --global credential.helper wincred


// git merge
// git merge 는 다른 브랜치를 현재 Checkout된 브랜치에 Merge 하는 명령이다. Merge 하고 나서 현재 브랜치가 Merge 된 결과를 가리키도록 옮긴다.
// git merge 명령은 브랜치의 기초에서 설명한다. 이 책의 여러 곳에서 merge 명령을 사용하지만 브랜치의 기초에서 설명한 것에서 크게 벗어나지 않는다. git merge <branch> 명령을 실행하면 해당 브랜치가 Merge 된다.
// 공개 프로젝트 Fork의 끝 부분에서 Squash 해서 Merge 하는 방법도 설명한다. Merge 하는 브랜치의 히스토리는 무시하고 새 커밋을 하나 만들어 Merge 하는 방법이다.
// 고급 Merge에서는 -Xignore-space-change 옵션을 사용하는 방법이나 --abort 플래그로 Merge를 중단하는 방법 등을 설명한다.
// Merge 하기 전에 서명을 검사하는 방법도 설명한다. GPG 서명은 커밋에 서명하기에서 설명한다.
// 마지막으로 Subtree를 Merge 하는 것은 서브트리 Merge에서 배운다.

// git mergetool
// git mergetool 명령은 외부 Merge Helper를 실행해 준다. Merge 하다가 문제가 생겼을 때 사용한다.
// 충돌의 기초에서 살짝 맛을 보여주고 다른 Merge, Diff 도구 사용하기에서 자신의 외부 Merge 도구를 설정하는 방법을 설명한다.

// // Rebase
// - $git rebase <합칠 브랜치>  명령어를 사용
// - Rebase 의 경우, 브랜치의 변경사항을 순서대로 다른 브랜치에 적용하면서 합친다.
// - Rebase 명령으로 한 브랜치에서 변경된 사항을 다른 브랜치에 적용할 수 있다.
//  
// - 사용) 리모트 브랜치에 커밋을 깔끔하게 적용하고 싶을 때
//  
// - 장점)  merge보다 좀 더 깨끗한 히스토리를 만든다.
//            ㄴ> Rebase한 브랜치의 로그를 보면 히스토리가 선형이다.            ㄴ> 일을 병렬로 동시에 진행해도 Rebase 하고 나면 모든 작업이 차례대로 수행된 것처럼 보인다.
// - 단점) 아래에서 설명할 'Rebase 의 위험성'이 있다- "Rebase 하는 리모트 브랜치는 직접 관리하는 것이 아니라 그냥 참여하는 브랜치일 것이다."   ㄴ> 메인 프로젝트에 Patch를 보낼 준비가 되면 하는 것이 Rebase이므로
//          브랜치에서 하던 일을 완전히 마치고 origin/main으로 Rebase 한다. 
//          이렇게 Rebase 하고 나면 프로젝트 관리자는 어떠한 통합작업도 필요 없다.          그냥 main 브랜치를 Fast-forward 시키면 된다.
//  
//  
// - [Rebase과정]
//   ⓐ 일단 두 브랜치가 나뉘기 전인 공통 커밋으로 이동  
//   ⓑ 공통 커밋부터 지금 Checkout 한 브랜치가 가리키는 커밋까지 diff를 차례로 만들어 어딘가에 임시로 저장해 놓는다.   
//   ⓒ 'Rebase 할 브랜치'가 '합칠 브랜치'가 가리키는 커밋을 가리키게 하고   
//   ⓓ 아까 저장해 놓았던 변경사항을 차례대로 적용한다.  
//   ⓔ 그리고 나서 main 브랜치를 Fast-forward 시킨다. (=main  브랜치를 최신 커밋으로 옮긴다.)
