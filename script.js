var likeIcons = document.querySelectorAll('.bi.bi-heart');

likeIcons.forEach(function(likeIcons) {
    var postId = likeIcons.id;
    var liked = localStorage.getItem(postId);

    if(liked === 'true'){
        likeIcons.classList.add('bi-heart-fill');
        likeIcons.classList.remove('bi-heart');
    }

    likeIcons.addEventListener('click', function()  {
        this.classList.toggle('bi-heart');
        this.classList.toggle('bi-heart-fill');

        if (this.classList.contains('bi-heart-fill')){
            localStorage.setItem(postId, 'true');
        } else{
            localStorage.setItem( postId,'false');
        }

    })

});