package com.example.cafettoapp2.Extra;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ExtraService {

    private final ExtraRepository extraRepository;

    public ExtraService(ExtraRepository extraRepository) {
        this.extraRepository = extraRepository;
    }

    public List<Extra> getExtras (){
        return extraRepository.findAll();
    }

    public void addNewExtra(Extra extra){

        if(extra == null){
            throw new NullPointerException("No hay extra");
        }
        extraRepository.save(extra);
    }

    public void deleteExtra(int id){

        boolean exist = extraRepository.existsById(id);

        if(!exist){
            throw new IllegalArgumentException("No such extra");
        }

        extraRepository.deleteById(id);
    }

    public void updateExtra(int extraId,String name,int price, boolean status){

        Extra extra = extraRepository.findById(extraId).orElseThrow(()->new IllegalArgumentException("No such extra"));

        if(name != null && !name.isEmpty() && !Objects.equals(extra.getName(),name)){
            extra.setName(name);
        }

        if(price > 0 && !Objects.equals(extra.getPrice(),price)){
            extra.setPrice(price);
        }

        extra.setSelected(status);
    }
}
