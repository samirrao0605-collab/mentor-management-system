package com.studyecart.mentorbackend.service.impl;

import com.studyecart.mentorbackend.entity.Mentor;
import com.studyecart.mentorbackend.repository.MentorRepository;
import com.studyecart.mentorbackend.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorServiceImpl implements MentorService {

    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public Mentor addMentor(Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @Override
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }

    @Override
    public Mentor getMentorById(Long id) {
        return mentorRepository.findById(id).orElse(null);
    }

    @Override
    public Mentor updateMentor(Long id, Mentor mentor) {

        Mentor existingMentor =
                mentorRepository.findById(id).orElse(null);

        if (existingMentor != null) {

            existingMentor.setName(mentor.getName());
            existingMentor.setEmail(mentor.getEmail());
            existingMentor.setTechnology(mentor.getTechnology());
            existingMentor.setExperience(mentor.getExperience());
            existingMentor.setPhone(mentor.getPhone());

            return mentorRepository.save(existingMentor);
        }

        return null;
    }

    @Override
    public void deleteMentor(Long id) {
        mentorRepository.deleteById(id);
    }
}