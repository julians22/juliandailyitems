<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DailyItemResources;
use App\Models\DailyItem;
use Illuminate\Http\Request;

class DailyItemsController extends Controller
{
    public function index() {
        $items = DailyItemResources::collection(DailyItem::orderBy('sort', 'asc')->paginate(6));

        return $items;
    }
}
