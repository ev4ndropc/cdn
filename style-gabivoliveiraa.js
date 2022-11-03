		$('.entry-title').toArray().forEach((title, i)=> {
			setTimeout(() => {
				$(title).addClass('animate__animated animate__fadeInDown')
			}, i*50)
		})
		
		$('.walkerpress-post-thumbnails img').toArray().forEach((img, i)=> {
			setTimeout(() => {
				$(img).addClass('animate__animated animate__fadeIn')
			}, i*50)
		})
		
		$('.entry-content p').toArray().forEach((p, i)=> {
			setTimeout(() => {
				$(p).addClass('animate__animated animate__fadeInUp')
			}, i*50)
		})
		
		$('.post-thumbnail img').toArray().forEach((img, i)=> {
			setTimeout(() => {
				$(img).addClass('animate__animated animate__fadeIn')
			}, i*50)
		})

		$('article').toArray().forEach((article, index) => {
		    if(index < 11) {
			$(article).addClass('animate__animated animate__fadeInLeft')    
		    }else{
		    	$(article).addClass('animate__animated animate__fadeInRight')
		    }
		})

		$('.swiper-slide').addClass('animate__animated animate__fadeIn')
