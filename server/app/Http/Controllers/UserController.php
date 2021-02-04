<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users=User::all();
        return $users;
    }
    public function create(Request $request)
    {
        $request->validate([
            'email'=>'required | email'
        ]);
         $userData = $request->all();
         $user = User::create($userData);
 
        return $user;
    }
}
