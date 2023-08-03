<?php

namespace App\Http\Controllers;

use App\Models\crud;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cruds = crud::all();

        return response()->json($cruds);
        // return view('view');
    }
    public function table()
    {
        //$cruds = crud::all();

        // return response()->json($cruds);
        return view('view');
    }

    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('add');
    } 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $crud = new crud;
        $crud->name = $request->name;
        $crud->email = $request->email;
        $crud->amount = $request->amount;
        $crud->phone = $request->phone;
        $crud->save();
        return response()->json(['data'=>$crud, 'success'=> true]);
        // return redirect(route('crud.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return view('update');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $crud= crud::find($id);
        return response()->json($crud);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $crud = crud::find($id);
        $crud->name = $request->name;
        $crud->amount = $request->amount;
        $crud->email = $request->email;
        $crud->phone = $request->phone;
        $crud->save();

        return ['Result'=>'Data inserted successfully'];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        crud::destroy($id);
        return ['Result'=>'Data inserted successfully'];
    }
}
