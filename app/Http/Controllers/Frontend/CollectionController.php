<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\DailyItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $collection = DailyItem::orderBy('sort', 'asc')->paginate(10);

        return Inertia::render('Collection', [
            'dailyItems' => $collection
        ])->withViewData([
            'title' => 'Collection - ' . config('app.name'),
            'description' => "Dean Abner Julian personal collection/daily items website's. May you want it too"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
