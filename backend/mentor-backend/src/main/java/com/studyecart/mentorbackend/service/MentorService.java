package com.studyecart.mentorbackend.service;

import com.studyecart.mentorbackend.entity.Mentor;

import java.util.List;

public interface MentorService {

    Mentor addMentor(Mentor mentor);

    List<Mentor> getAllMentors();

    Mentor getMentorById(Long id);

    Mentor updateMentor(Long id, Mentor mentor);

    void deleteMentor(Long id);
}