package com.digital.crudo.saladereuniao.saladereuniao.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String name;
    @Column
    private String date;
    @Column
    private String startHour;
    @Column
    private String endHour;

    @Override
    public String toString()
    {
        return "Room [id="+id+",name="+name+",startHour="+startHour+" ,endHour="+endHour+"]";
    }
}
