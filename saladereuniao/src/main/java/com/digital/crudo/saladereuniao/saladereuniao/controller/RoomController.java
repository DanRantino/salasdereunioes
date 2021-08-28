package com.digital.crudo.saladereuniao.saladereuniao.controller;


import com.digital.crudo.saladereuniao.saladereuniao.exception.ResourceNotFoundException;
import com.digital.crudo.saladereuniao.saladereuniao.model.Room;
import com.digital.crudo.saladereuniao.saladereuniao.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/rooms")
    public List<Room> getAllRooms()
    {
        return roomRepository.findAll();
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable(value = "id") long roomId) throws ResourceNotFoundException
    {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(()-> new ResourceNotFoundException("Room not found:: "+roomId));
        return ResponseEntity.ok(room);
    }

    @PostMapping("/rooms")
    public Room createRoom(@Valid @RequestBody Room room)
    {
        return roomRepository.save(room);
    }

    @PutMapping("/rooms")
    public ResponseEntity<Room> updateRoom(@Valid @RequestBody Room roomDetails) throws ResourceNotFoundException
    {
        Room room = roomRepository.findById(roomDetails.getId())
                .orElseThrow(()-> new ResourceNotFoundException("Room not found for update:: "+roomDetails.getId()));
        final Room newRoom = roomRepository.save(roomDetails);
        return ResponseEntity.ok(newRoom);
    }

    public Map<String, Boolean> deleteRoom(@PathVariable(value = "id") long roomId) throws ResourceNotFoundException
    {
        roomRepository.findById(roomId)
                .orElseThrow(()-> new ResourceNotFoundException("Room not found for update:: "+roomId));
        roomRepository.deleteById(roomId);
        Map<String, Boolean> response = new HashMap<>();
        response.put( "delete", Boolean.TRUE);
        return response;
    }
}
