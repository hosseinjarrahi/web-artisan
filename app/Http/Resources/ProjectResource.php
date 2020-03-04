<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'complete' => $this->complete,
            'description' => $this->description,
            'plan_id' => $this->plan_id,
            'url' => $this->url,
            'steps' => $this->steps,
        ];
    }
}
