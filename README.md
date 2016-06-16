# Markdown Editor for React

## Structures
```
  [ EditorCore ] [ Plugins ]
        | 
  [ Redux Store ]
        | 
 [ Offline Mode: localstorage ]      
```

## Main challenges
 - 기본 마크다운 + 문법 확장 
 - 로드후 인터넷 커넥션이 없으면 자동으로 로컬 스토리지에 저장함. 
 - undo/redo 
 - 키보드 숏컷
 - 이미지 첨부 및 지도 첨부 (특수 문법 필요)
 

## How to run example project

#### setup symbolic link for runtime development
```
  $> npm install
  $> ln -fs ~/PATH_TO_THIS_PROJECT/src/ ./example/src

  it should be like this:

  --- editor_project_home
   |--- example
   |  |- src        <---- symbolic link
   |--- src
   |---  

```

#### if then, run the script
```
  $> npm run start
```
 
