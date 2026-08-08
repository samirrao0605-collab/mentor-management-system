package com.studyecart.mentorbackend.controller;

import com.studyecart.mentorbackend.entity.Mentor;
import com.studyecart.mentorbackend.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentors")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @PostMapping
    public Mentor addMentor(@RequestBody Mentor mentor) {
        return mentorService.addMentor(mentor);
    }

    @GetMapping
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentors();
    }

    @GetMapping("/{id}")
    public Mentor getMentorById(@PathVariable Long id) {
        return mentorService.getMentorById(id);
    }

    @PutMapping("/{id}")
    public Mentor updateMentor(
            @PathVariable Long id,
            @RequestBody Mentor mentor
    ) {
        return mentorService.updateMentor(id, mentor);
    }

    @DeleteMapping("/{id}")
    public String deleteMentor(@PathVariable Long id) {
        mentorService.deleteMentor(id);
        return "Mentor deleted successfully";
    }
}