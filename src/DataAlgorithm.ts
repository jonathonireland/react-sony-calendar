
export function MainDataAlgorithm (data: []){
    let dataFormatted:[];

    if ( Array.isArray(data) ){

        data.forEach((element)=>{
            console.log(element);
        })
    }

    //return dataFormatted;
}

export function ThumbnailImageLink(Thumbnail: string){
    let finalImageLink;
    if(Thumbnail){
        finalImageLink = '/assets/'+Thumbnail+'.webp';
    }
    return finalImageLink;
}

