package com.app.test;

import java.sql.Connection;
import java.sql.SQLException;

import com.app.dao.DBConnector;
import com.app.dao.UserDAO;
import com.app.domain.userDTO;

public class Test {
   public static void main(String[] args) {
      //연결 테스트
      
//      try {
//         Connection conn = DBConnector.getConnection();
//         System.out.println("연결성공");
//         conn.close();
//      } catch (SQLException e) {
//         // TODO Auto-generated catch block
////         e.printStackTrace();
//         System.out.println("연결실패");
//      }
	   com.app.domain.userDTO userDTO = new userDTO();
	   UserDAO userDAO = new UserDAO();
	   
	   userDTO.setUserId("abc");
	   userDTO.setUserpassword("1234");
	   userDTO.setUserName("홍길동");
	   userDTO.setUserAge(20);
	   userDTO.setUserGender("M");
	   userDTO.setUserBirth("20001111");
	   
	     System.out.println(userDAO.checkId(userDTO.getUserId()));
	   
   }
}
