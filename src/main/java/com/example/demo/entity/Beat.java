package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@Entity
@Table(name = "Beat")
public class Beat {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String beatName;

    @Column
    private String orderID;

    @Column
    private Double price;

    @Column
    private int status;

    @Column
    private String beatSound;

/*    @Column
    private */

    @ManyToOne
    @JoinColumn(name="userName")
    private User userName;

    @OneToMany(mappedBy ="PromotionAsc")
    private Set<PromotionBeatAssociation> promotionAsc;


    public  Set<PromotionBeatAssociation> getPromotionAsc(){
        return promotionAsc;
    }

    public Beat(String beatName, String beatSound,  Double price, int status ,User userName) {
        this.beatName = beatName;
        this.price = price;
        this.status = status;
        this.beatSound = beatSound;
        this.userName=userName;
    }

    public Beat() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getBeatName() {
        return beatName;
    }

    public void setBeatName(String beatName) {
        this.beatName = beatName;
    }

    public String getOrderID() {
        return orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }


    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getBeatSound() {
        return beatSound;
    }

    public void setBeatSound(String beatSound) {
        this.beatSound = beatSound;
    }

    public User getUserName() {
        return userName;
    }

    public void setUserName(User userName) {
        this.userName = userName;
    }

    public void setPromotionAsc(Set<PromotionBeatAssociation> promotionAsc) {
        this.promotionAsc = promotionAsc;
    }


    @Override
    public String toString() {
        return "Beat{" +
                "Id=" + Id +
                ", beatName='" + beatName + '\'' +
                ", orderID='" + orderID + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", beatSound='" + beatSound + '\'' +
                ", userName=" + userName +
                ", promotionAsc=" + promotionAsc +
                '}';
    }
}
