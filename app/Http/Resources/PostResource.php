<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'author' => $this->author,
            'short_desc' => $this->short_desc,
            'long_desc' => $this->long_desc,
            'pic' => $this->pic,
            'meta_description' => $this->meta_description,
            'keywords' => $this->keywords,
            'url' => '/post/'.str_replace(' ','-',$this->title),
        ];
    }
}
