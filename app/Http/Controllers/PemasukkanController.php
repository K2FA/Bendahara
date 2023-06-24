<?php

namespace App\Http\Controllers;

use App\Models\Pemasukkan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemasukkanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pemasukkan = Pemasukkan::all();
        return Inertia::render('Dashboard' , compact('pemasukkan'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pemasukkan = Pemasukkan::all();
        return Inertia::render('Form/Add',compact('pemasukkan') );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Pemasukkan::create([
            'name' => $request['name'],
            'amount' => $request['amount'],
            'date' => $request['date'],
        ]);
        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( Request $request)
    {
        $pemasukkan = Pemasukkan::find($request-> id);
        return Inertia::render('Form/Edit', compact('pemasukkan'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Pemasukkan::find($request->id)->update([
            'name' => $request['name'],
            'amount' => $request['amount'],
            'date' => $request['date'],
        ]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Pemasukkan::find($request->id)->delete();
        return redirect()->back();
    }
}
