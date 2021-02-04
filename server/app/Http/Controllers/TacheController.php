<?php

namespace App\Http\Controllers;
use App\Tache;

use Illuminate\Http\Request;

class TacheController extends Controller
{
    public function index()
    {
        $taches=Tache::all();
        return $taches;
    }
    public function create(Request $request)
    {
        $tache = new Tache();
        
        $tache->title=$request->title;
        
        $tache->desc=$request->desc;
       
        $tache->statut="false";

        $tache->idUser=$request->idUser;
        $tache->save();
       
       return $tache;
    
    }
    public function getTache($idUser){
        $tache = Tache::where('idUser', $idUser)->get();
        return $tache;
    }
    public function deleteTache($id)
    {

        Tache::find($id)->delete();
        $tache=Tache::where('id',$id)->delete();
            
         return ('Tache supprimé avec succée');
        
    }
    function updateTache(Request $request,$id){
        $tache=Tache::find($id);
        $tache->title = $request->title;    
        $tache->desc=$request->desc; 
        $tache->statut=$request->statut;
        
        $tache->save();
        return ('ok');
    }
    function changeStatut(Request $request,$id){
        $statutTache=Tache::find($id);
        $statutTache->statut = "true";    
         
        
        $statutTache->save();
        return ('ok');
    }
}
