1. frontend 폴더로 이동

2. 이미지 빌드
```
docker build -f Dockerfile -t frontend .
```

3. 컨테이너 생성 및 실행
```
docker run -p 3000:3000 frontend
```